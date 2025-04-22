import React, { useState } from 'react';
import { Clock, ChevronDown, Download, ChevronRight, CreditCard, Check, Clock as ClockCircle, X } from 'lucide-react';

export default function Payment() {
  const [activeTab, setActiveTab] = useState('All payments');
  const [selectedPayments, setSelectedPayments] = useState([]);
  
  const tabs = ['All payments', 'Received', 'Refunded'];
  
  const payments = [
    {
      id: '06c1774-7f3d-46ad...90a8',
      status: 'Received',
      amount: 423.00,
      currency: 'CAD',
      paymentMethod: 'Visa',
      cardNumber: '4242',
      cardIcon: 'visa',
      creationDate: 'Mar 23, 2022, 13:00 PM'
    },
    {
      id: '06c1774-7f3d-46ad...90a8',
      status: 'Pending',
      amount: 476.25,
      currency: 'CAD',
      paymentMethod: 'MasterCard',
      cardNumber: '2332',
      cardIcon: 'mastercard',
      creationDate: 'Mar 23, 2022, 13:00 PM'
    },
    {
      id: '06c1774-7f3d-46ad...90a8',
      status: 'Declined',
      amount: 623.53,
      currency: 'CAD',
      paymentMethod: 'NuPay',
      cardNumber: '',
      cardIcon: 'nupay',
      creationDate: 'Mar 23, 2022, 13:00 PM'
    },
    {
      id: '06c1774-7f3d-46ad...90a8',
      status: 'Received',
      amount: 623.00,
      currency: 'CAD',
      paymentMethod: 'Mercado Pago',
      cardNumber: '',
      cardIcon: 'mercadopago',
      creationDate: 'Mar 23, 2022, 13:00 PM'
    }
  ];
  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPayments(payments.map(payment => payment.id));
    } else {
      setSelectedPayments([]);
    }
  };
  
  const handleSelectPayment = (id) => {
    if (selectedPayments.includes(id)) {
      setSelectedPayments(selectedPayments.filter(paymentId => paymentId !== id));
    } else {
      setSelectedPayments([...selectedPayments, id]);
    }
  };
  
  const getStatusIcon = (status) => {
    switch(status) {
      case 'Received':
        return <Check className="w-4 h-4 text-white" />;
      case 'Pending':
        return <ClockCircle className="w-4 h-4 text-white" />;
      case 'Declined':
        return <X className="w-4 h-4 text-white" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Received':
        return 'bg-green-600';
      case 'Pending':
        return 'bg-yellow-600';
      case 'Declined':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };
  
  const getPaymentIcon = (icon) => {
    switch(icon) {
      case 'visa':
        return <div className="w-8 h-5 bg-blue-500 text-white text-xs flex items-center justify-center rounded">VISA</div>;
      case 'mastercard':
        return <div className="w-8 h-5 bg-orange-500 text-white text-xs flex items-center justify-center rounded">MC</div>;
      case 'nupay':
        return <div className="w-8 h-5 bg-purple-500 text-white text-xs flex items-center justify-center rounded">NU</div>;
      case 'mercadopago':
        return <div className="w-8 h-5 bg-blue-300 text-white text-xs flex items-center justify-center rounded">MP</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium text-gray-800">Payments overview</h1>
        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <Download className="w-5 h-5 mr-2" />
          Export
        </button>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-1 ${
                activeTab === tab 
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <Clock className="w-4 h-4 mr-2 text-gray-500" />
          Date range
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>
        
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <span className="mr-2 text-gray-500">Status</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
        
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
          P. Method
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>
      </div>
      
      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pl-4 pr-6 py-4 text-left">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onChange={handleSelectAll}
                  checked={selectedPayments.length === payments.length && payments.length > 0}
                />
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                P. Method
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Creation Date
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id + payment.status} className="hover:bg-gray-50">
                <td className="pl-4 pr-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedPayments.includes(payment.id)}
                    onChange={() => handleSelectPayment(payment.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {payment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-6 h-6 ${getStatusColor(payment.status)} rounded-full flex items-center justify-center mr-2`}>
                      {getStatusIcon(payment.status)}
                    </div>
                    <span className="text-sm text-gray-500">{payment.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">${payment.amount.toFixed(2)}</span>
                    <span className="ml-1 text-sm text-gray-500">{payment.currency}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getPaymentIcon(payment.cardIcon)}
                    <span className="ml-2 text-sm text-gray-500">
                      {payment.cardNumber && (
                        <>
                          <span className="mr-1">••••</span>
                          {payment.cardNumber}
                        </>
                      )}
                      {!payment.cardNumber && payment.paymentMethod}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.creationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mt-8 flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}