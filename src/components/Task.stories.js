import React from "react";

import Task from "./Task";

// this tells storybook about the component we are documenting
export default {
  component: Task, // component itself
  title: "Task", // how storybook will refer to this on the sidebar of the Storybook app
  // excludeStories -- exports in the story file that should be ignored by Storybook app (don't render)
  // argTypes -- specify the args behavior in each story (found below)
};

const Template = (args) => <Task {...args} />;

// to define our stories, we export a function for each test state to generate a story
// story -- function that returns a rendered element in a given state
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
