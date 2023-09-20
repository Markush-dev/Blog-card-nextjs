export const mockDataChart = [
  {
    labels: ['10-20%', '20-50%', 'More then 50%', 'Not at all', 'Under 10%'],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 15, 2, 2, 12],
        backgroundColor: [
          'rgb(10 217 236)',
          'rgb(14 100 196)',
          'rgb(78, 126, 191)',
          'rgb(111, 163, 204)',
          'rgb(209, 227, 239)',
        ],
        borderColor: ['white'],
        borderWidth: 2,
      },
    ],
  },
  {
    labels: ['None', 'Rent', 'Utilities', 'Petrol', 'Supplies', 'Staff', 'Logic'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 10, 12, 12, 20, 6, 5],
        backgroundColor: [
          'rgb(57 74 88)',
          'rgb(14 100 196)',
          'rgb(78, 126, 191)',
          'rgb(111, 163, 204)',
          'rgb(209, 227, 239)',
          'rgb(246, 249, 253)',
          'rgb(10 217 236)',
        ],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  }
];

export const mockDataHorizontalChart = {
  labels: [
    'Increasing cost of supplies and materials',
    'Customer spending less',
    'Hiring skilled employees and retaining good staff',
    'Business finances',
    'Keeping up with technology',
    'Keeping up with regulations and reporting',
    'Cybersecurity',
    'Employees expecting higher wages',
    'Customer choosing to buy sustainably',
  ],
  datasets: [
    {
      label: '',
      data: [41.5, 32, 7.6, 6.3, 3.5, 3, 2.6, 1.8, 1.6],
      backgroundColor: 'rgb(14 100 196)',
      borderWidth: 1,
    },
  ],
};