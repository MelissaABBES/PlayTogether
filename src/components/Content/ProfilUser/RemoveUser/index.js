const RemoveUser = ({ hanbleRemoveUser }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    hanbleRemoveUser();
  };
  return (
    <button
      type="button"
      onClick={handleSubmit}
    >Supprimer
    </button>
  );
};

export default RemoveUser;
