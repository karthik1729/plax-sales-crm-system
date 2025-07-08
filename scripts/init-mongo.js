// MongoDB initialization script
db = db.getSiblingDB('sales-crm');

// Create collections
db.createCollection('users');
db.createCollection('employees');
db.createCollection('distributors');
db.createCollection('dealers');
db.createCollection('retailers');
db.createCollection('influencers');
db.createCollection('orders');
db.createCollection('products');
db.createCollection('credit_limits');
db.createCollection('targets');
db.createCollection('attendance');
db.createCollection('travel_allowances');

// Create indexes
db.users.createIndex({ mobile: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.orders.createIndex({ createdAt: -1 });
db.orders.createIndex({ status: 1 });
db.orders.createIndex({ customerId: 1 });

// Insert sample admin user
db.users.insertOne({
  mobile: '+919999999999',
  name: 'Admin User',
  role: 'admin',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
});

print('Database initialized successfully');