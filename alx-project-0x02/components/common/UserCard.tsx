import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {address.street}, {address.city}
      </p>
    </div>
  );
}
