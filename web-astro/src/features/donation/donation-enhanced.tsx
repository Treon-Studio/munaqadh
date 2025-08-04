import { useState } from 'react';
import { useAuth } from '../auth/auth-context';

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
  { id: '5', amount: 500, label: '$500' },
  { id: '6', amount: 1000, label: '$1000' },
];

export default function DonationEnhanced() {
  const { user, isLoggedIn, login } = useAuth();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    name: user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : '',
    email: user?.email || '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = getFinalAmount();
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    // If user is not logged in, redirect to login
    if (!isLoggedIn) {
      const shouldLogin = confirm('You need to login to make a donation. Would you like to login now?');
      if (shouldLogin) {
        login();
      }
      return;
    }
    
    // TODO: Implement actual payment processing with Stripe
    // This would integrate with your backend API
    try {
      const donationData = {
        amount,
        donorInfo: {
          ...donorInfo,
          userId: user?.userId,
        },
        timestamp: new Date().toISOString(),
      };

      console.log('Processing donation:', donationData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Thank you ${donorInfo.name || user?.firstName || 'Anonymous'} for your donation of $${amount}!`);
      
      // Reset form
      setSelectedAmount(null);
      setCustomAmount('');
      setDonorInfo(prev => ({ ...prev, message: '' }));
      
    } catch (error) {
      console.error('Donation failed:', error);
      alert('Sorry, there was an error processing your donation. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Make a Difference Today
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your generous donation helps us continue our mission and make a positive impact in the community.
        </p>
        {isLoggedIn && (
          <p className="mt-4 text-green-600 font-medium">
            Welcome back, {user?.firstName || user?.email}! 
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Choose Your Donation Amount
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Predefined Amounts */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3">
                {predefinedAmounts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleAmountSelect(item.amount)}
                    className={`p-3 text-center border rounded-lg font-medium transition-colors ${
                      selectedAmount === item.amount
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
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
                Or Enter Custom Amount
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
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Donor Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isLoggedIn && user?.firstName && user?.lastName}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isLoggedIn && user?.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share why you're donating..."
                />
              </div>
            </div>

            {/* Login Notice for Anonymous Users */}
            {!isLoggedIn && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">Login for Better Experience</h4>
                    <p className="text-sm text-blue-700">
                      Login to track your donations and get receipts automatically.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLoggedIn 
                ? `Donate $${getFinalAmount() || '0.00'}` 
                : `Continue to Login - $${getFinalAmount() || '0.00'}`
              }
            </button>
          </form>
        </div>

        {/* Impact Information */}
        <div className="space-y-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Your Impact
            </h3>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-center">
                <span className="font-medium">$25</span>
                <span className="ml-2">provides meals for a family</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">$50</span>
                <span className="ml-2">supports educational materials</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">$100</span>
                <span className="ml-2">funds community programs</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">$250</span>
                <span className="ml-2">sponsors a scholarship</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Donate?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>100% of donations go directly to our programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Tax-deductible contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Transparent reporting on fund usage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Regular updates on your impact</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">
              Secure Donation
            </h3>
            <p className="text-yellow-800">
              Your donation is processed securely with industry-standard encryption. 
              We never store your payment information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
