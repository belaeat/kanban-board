import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, aut,
        suscipit sequi quae excepturi esse labore repellat amet illum unde totam
        velit omnis nihil? Quod culpa perferendis cumque autem est.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
