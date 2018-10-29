const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', () => {
	it('postCount returns no. of posts', (done) => {
		const joe = new User({
			name : 'Joe', 
			posts : [{ title : 'PostTitle'} , { title : 'SecondPost'}] 
		});
		joe.save() 
			.then(() => User.findOne({name : 'Joe'}))
			.then((user) => {
				assert(joe.postCount === 2);
				done();
			});
	});
});