```javascript
//Corrected aggregation pipeline
db.collection('data').aggregate([
  {$match: { "field": { $exists: true, $nin: [null, ''] } }},
  {$group: {_id: '$field', count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 10}
])
```