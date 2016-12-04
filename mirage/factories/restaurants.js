import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	name: faker.lorem.word,
	locationId: 1,
	mealId: 1
});
