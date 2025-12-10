import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getInvoices, getInvoice } from '@acme/api-client'
import { Card, Table, TableRow, TableCell, Badge } from '@acme/ui'

export function InvoicesPage() {
  const { data: invoices = [] } = useQuery({ queryKey: ['invoices'], queryFn: getInvoices })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
      <Table headers={['Number', 'Date', 'Amount', 'Status']}>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>
              <a className="text-blue-700" href={`/invoices/${invoice.id}`}>
                {invoice.number}
              </a>
            </TableCell>
            <TableCell>{invoice.issuedOn}</TableCell>
            <TableCell>₹{invoice.amount.toLocaleString()}</TableCell>
            <TableCell>
              <Badge tone={invoice.status === 'paid' ? 'green' : invoice.status === 'overdue' ? 'amber' : 'blue'}>
                {invoice.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  )
}

export function InvoiceDetail() {
  const { invoiceId } = useParams()
  const { data: invoice } = useQuery({
    queryKey: ['invoice', invoiceId],
    queryFn: () => getInvoice(invoiceId || ''),
    enabled: Boolean(invoiceId)
  })

  if (!invoice) return <p>Loading...</p>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Invoice {invoice.number}</h1>
      <Card title="Summary">
        <p className="text-gray-700">Amount: ₹{invoice.amount.toLocaleString()}</p>
        <p className="text-gray-700">Status: {invoice.status}</p>
        <p className="text-gray-700">Due: {invoice.dueOn}</p>
      </Card>
      <Card title="Line items">
        <Table headers={['Description', 'Quantity', 'Amount']}>
          {(invoice.lineItems || []).map((line, idx) => (
            <TableRow key={`${line.description}-${idx}`}>
              <TableCell>{line.description}</TableCell>
              <TableCell>{line.quantity ?? 1}</TableCell>
              <TableCell>₹{line.amount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>
    </div>
  )
}
