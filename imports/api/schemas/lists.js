import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

class ListsCollection extends Mongo.Collection {
}

export const Lists = new ListsCollection('lists');

Lists.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export const ListsSchema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: 'hidden'
        },
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function(){
            if(!this.isUpdate)
                return new Date();
            },
        autoform: {
            type: 'hidden'
        }
    },
    owner: {
        type: String,
        optional: true
    },
    title: {
        type: String
    }
});

Lists.attachSchema(ListsSchema);