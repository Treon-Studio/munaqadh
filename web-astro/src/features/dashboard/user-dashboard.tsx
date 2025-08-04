import { useState, useEffect } from 'react';
import { useAuth } from '../auth/auth-context';

interface Donation {
  id: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  message?: string;
  paymentMethod: string;
}

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalDonated: 0,
    donationCount: 0,
    lastDonation: null as string | null,
  });

  useEffect(() => {
    // Simulate API call to fetch user donations
    const fetchDonations = async () => {
      setIsLoading(true);
      
      // Mock data - replace with actual API call
      const mockDonations: Donation[] = [
        {
          id: '1',
          amount: 100,
          date: '2024-01-15',
          status: 'completed',
          message: 'For education programs',
          paymentMethod: 'Credit Card',
        },
        {
          id: '2',
          amount: 50,
          date: '2024-01-10',
          status: 'completed',
          paymentMethod: 'PayPal',
        },
        {
          id: '3',
          amount: 250,
          date: '2024-01-05',
          status: 'pending',
          message: 'Monthly donation',
          paymentMethod: 'Bank Transfer',
        },
      ];

      // Calculate stats
      const totalDonated = mockDonations
        .filter(d => d.status === 'completed')
        .reduce((sum, d) => sum + d.amount, 0);
      
      const donationCount = mockDonations.filter(d => d.status === 'completed').length;
      const lastDonation = mockDonations
        .filter(d => d.status === 'completed')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]?.date || null;

      setDonations(mockDonations);
      setStats({ totalDonated, donationCount, lastDonation });
      setIsLoading(false);
    };

    fetchDonations();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Donatur</h1>
              <p className="text-gray-600">Selamat datang, {user?.firstName || user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donasi</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stats.totalDonated.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jumlah Donasi</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.donationCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Donasi Terakhir</p>
                <p className="text-lg font-semibold text-gray-900">
                  {stats.lastDonation ? formatDate(stats.lastDonation) : 'Belum ada'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Riwayat Donasi</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jumlah
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metode Pembayaran
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pesan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(donation.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${donation.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(donation.status)}`}>
                        {donation.status === 'completed' ? 'Selesai' : 
                         donation.status === 'pending' ? 'Pending' : 'Gagal'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donation.paymentMethod}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {donation.message || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Donasi Lagi</h3>
            <p className="text-gray-600 mb-4">
              Terima kasih atas dukungan Anda! Donasi Anda membantu kami melanjutkan misi kami.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Donasi Sekarang
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profil Saya</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Email:</span> {user?.email}</p>
              <p><span className="font-medium">Nama:</span> {user?.firstName} {user?.lastName}</p>
              <p><span className="font-medium">ID Pengguna:</span> {user?.userId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
