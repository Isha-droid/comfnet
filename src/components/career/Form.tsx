const Form = () => {
    return (
      <form className="mt-6">
        <label className="block mb-2">Please attach your CV</label>
        <input type="file" className="mb-4" />
        <label className="block mb-2">Please enclose a cover letter</label>
        <input type="file" className="mb-4" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;
  