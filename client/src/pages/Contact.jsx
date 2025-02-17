export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">🏠 Hostel Contact Information</h2>
  
        {/* Warden Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">👨‍🏫 Wardens & Chief Proctor</h3>
          <ul className="space-y-3">
            <li className="border-b pb-2"><strong>Mr. Ashwin Lata</strong> - Student Welfare Head | 📞 +91 98765 43210</li>
            <li className="border-b pb-2"><strong>Mr. Dinesh Sharma</strong> - Warden (Boys Hostel) | 📞 +91 9929013218</li>
            <li className="border-b pb-2"><strong>Mrs. Tulshi Sharma</strong> - Warden (Girls Hostel) | 📞 +91 76543 21098</li>
          </ul>
        </div>
  
        {/* Fees Structure */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
          <h3 className="text-xl font-semibold mb-3">💰 Hostel Fees Structure</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Category</th>
                <th className="border p-2">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Single Room</td>
                <td className="border p-2">170,000/year</td>
              </tr>
              <tr>
                <td className="border p-2">Double Sharing</td>
                <td className="border p-2">120,000/year</td>
              </tr>
              <tr>
                <td className="border p-2">Triple Sharing</td>
                <td className="border p-2">1,05,000/year</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Emergency Contacts */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
          <h3 className="text-xl font-semibold mb-3">🚨 Emergency Contacts</h3>
          <p><strong>Hostel Security:</strong> 📞 +91 99999 88888</p>
          <p><strong>Medical Assistance:</strong> 📞 +91 88888 77777</p>
          <p><strong>University Helpdesk:</strong> 📞 +91 77777 66666</p>
        </div>
      </div>
    );
  }
  