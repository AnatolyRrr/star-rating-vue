import StarRating from './StarRating.vue';

export default {
  title: 'StarRating',
  component: StarRating,
  argTypes: {
    nameRating: String,
    totalStars: Number,
    sizeStars: Number,
    activeColor: String,
    inactiveColor: String,
    readonly: Boolean
  },
};

const Template = (args) => ({
  components: { StarRating },
  setup() {
    return { args };
  },
  template: '<StarRating v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};

export const Colors = Template.bind({});
Colors.args = {
  activeColor: '#3f3f3f',
  inactiveColor: '#c3c3c3',
};

export const Small = Template.bind({});
Small.args = {
  sizeStars: 20,
};
