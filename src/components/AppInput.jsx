export default function AppInput({placeholder,type="text",name}) {
  return (
    <input
      className="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}
