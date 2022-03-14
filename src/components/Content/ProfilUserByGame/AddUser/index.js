const AddUser = ({ hanbleAddUser }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    hanbleAddUser();
  };
  return (
    <button
      type="button"
      onClick={handleSubmit}
    >Ajouter
    </button>
  );
};

export default AddUser;
