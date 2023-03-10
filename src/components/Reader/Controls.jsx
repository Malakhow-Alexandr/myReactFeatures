export const ReaderControls = ({ currentItem, totalItems, onChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => {
          onChange(-1);
        }}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={currentItem === totalItems}
        onClick={() => {
          onChange(1);
        }}
      >
        Next
      </button>
    </section>
  );
};
