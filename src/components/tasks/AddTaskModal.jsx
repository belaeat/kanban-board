import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onCancel()
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="flex flex-col gap-4 mb-5">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded-md"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            className="w-full rounded-md "
            {...register("description")}
          />
        </div>
        <div className="flex gap-3 justify-end mt-5">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary text-white font-semibold"
          >
            Add Task
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
