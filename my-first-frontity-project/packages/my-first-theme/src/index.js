import Root from './components/Root/index.jsx'

export default {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible;
      },
    },
  },
};
