import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
class TasksCollection extends Mongo.Collection {
}

export const Tasks = new TasksCollection('tasks');

Tasks.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export const TasksSchema = new SimpleSchema({
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
    text: {
        type: String
    }
});

Tasks.attachSchema(TasksSchema);