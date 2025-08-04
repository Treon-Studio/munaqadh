import { useState } from 'react';

interface DonationAmount {
  id: string;
  amount: number;
  label: string;
}

const predefinedAmounts: DonationAmount[] = [
  { id: '1', amount: 25, label: '$25' },
  { id: '2', amount: 50, label: '$50' },
  { id: '3', amount: 100, label: '$100' },
  { id: '4', amount: 250, label: '$250' },
];

export default function DonationMobile() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = getFinalAmount();
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }
    
    // TODO: Implement payment processing
    console.log('Donation submission:', {
      amount,
      donorInfo,
    });
    alert(`Thank you for your donation of $${amount}!`);
  };

  return (
    <div className="px-4 py-6">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Make a Difference
        </h1>
        <p className="text-gray-600">
          Your donation helps us continue our mission and impact the community.
        </p>
      </div>

      {/* Impact Cards */}
      <div className="mb-8 space-y-3">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Your Impact</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div>$25 → Provides meals for a family</div>
            <div>$50 → Supports educational materials</div>
            <div>$100 → Funds community programs</div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Amount
            </label>
            <div className="grid grid-cols-2 gap-3">
              {predefinedAmounts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleAmountSelect(item.amount)}
                  className={`p-3 text-center border rounded-lg font-medium transition-colors ${
                    selectedAmount === item.amount
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="0.00"
                min="1"
                step="0.01"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Donor Info */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Your Information</h3>
            
            <input
              type="text"
              value={donorInfo.name}
              onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              value={donorInfo.email}
              onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              value={donorInfo.message}
              onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
              rows={3}
              placeholder="Message (Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Donate ${getFinalAmount() || '0.00'}
          </button>
        </form>
      </div>

      {/* Security Notice */}
      <div className="mt-6 bg-yellow-50 rounded-lg p-4">
        <div className="flex items-center">
          <span className="text-yellow-600 mr-2">🔒</span>
          <div>
            <h4 className="font-medium text-yellow-900">Secure Donation</h4>
            <p className="text-sm text-yellow-800">
              Your payment is processed securely with encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            Tax Deductible
          </span>
          <span className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            100% to Programs
          </span>
        </div>
      </div>
    </div>
  );
}
