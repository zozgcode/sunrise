import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Ursina Naef',
      lastName: '',
      mobileNumber: '+1-***-***-***',
      email: 'u***@gmail.com',
      jointNames: '',
      username: 'Ursina002',
      password: 'Naef@!3D'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3500000.0,
      saving_balance_usd: 3500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '003',
        dateTime: 'December 20 2024',
        description: 'Transfer from Aramco Pension',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****5009'
      },
      {
        transaction_id: '004',
        dateTime: 'December 15 2024',
        description: 'Transfer from Lamco Mortgage',
        status: 'Success',
        amount_usd: 35000.0,
        account_no: '****2930'
      },
      {
        transaction_id: '005',
        dateTime: 'November 16, 2024',
        description: 'Credit from Aramco Incentives',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        transaction_id: '006',
        dateTime: 'October 18, 2024',
        description: 'Credit from Frisal Company',
        status: 'Success',
        amount_usd: 18000.0
      },
      {
        transaction_id: '007',
        dateTime: 'October 10, 2024',
        description: 'Credit from Devon Energy Corporation',
        status: 'Success',
        amount_usd: 23000.0
      },
      {
        transaction_id: '008',
        dateTime: 'September 25, 2024',
        description: 'Credit from Ascend Innovations Ltd.',
        status: 'Success',
        amount_usd: 19000.0
      },
      {
        transaction_id: '007',
        dateTime: 'September 15, 2024',
        description: 'Debit to Walmart',
        status: 'Success',
        amount_usd: -1100.0
      },
      {
        transaction_id: '008',
        dateTime: 'August 18, 2024',
        description: 'Grocery Purchase at Supermarket.',
        status: 'Success',
        amount_usd: -350.0
      },
      {
        transaction_id: '009',
        dateTime: 'August 10, 2024',
        description: 'Debit to Orion Capital Holdings.',
        status: 'Success',
        amount_usd: -21000.0
      },
      {
        transaction_id: '010',
        dateTime: 'August 5, 2024',
        description: 'Credit from Valero Energy Corporation',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        transaction_id: '011',
        dateTime: 'July 21, 2024',
        description: 'Grocery Shopping at Local Market',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        transaction_id: '012',
        dateTime: 'July 18, 2024',
        description: 'Credit from Stellar Innovations Co.',
        status: 'Success',
        amount_usd: 35000.0
      },
      {
        transaction_id: '014',
        dateTime: 'June 30, 2024',
        description: 'Credit from Nexus Ventures.',
        status: 'Success',
        amount_usd: 31000.0
      },
      {
        transaction_id: '015',
        dateTime: 'June 12, 2024',
        description: 'Debit to Exxon Mobil',
        status: 'Success',
        amount_usd: 12500.0
      },
      {
        transaction_id: '016',
        dateTime: 'May 28, 2024',
        description: 'Credit from Murphy Oil',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        transaction_id: '017',
        dateTime: 'May 10, 2024',
        description: 'Debit to Stellar Networks Ltd.',
        status: 'Success',
        amount_usd: -9500.0
      },
      {
        transaction_id: '018',
        dateTime: 'April 22, 2024',
        description: 'Credit from Apex Dynamics Co.',
        status: 'Success',
        amount_usd: 26000.0
      },
      {
        transaction_id: '019',
        dateTime: 'April 12, 2024',
        description: 'Debit to Coterra Energy',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        transaction_id: '020',
        dateTime: 'April 5, 2024',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -240.0
      }
    ]
  }
];
