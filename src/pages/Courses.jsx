import { useEffect, useState } from "react";
import { getCourses } from "../api/course.api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-3 gap-6">
      {courses.map((c) => (
        <div key={c._id} className="bg-white shadow rounded-xl p-4">
          <img
            src={`http://localhost:5000/${c.image}`}
            className="rounded mb-3"
          />
          <h2 className="font-bold text-lg">{c.titre}</h2>
          <p className="text-gray-600">{c.description}</p>
        </div>
      ))}
    </div>
  );
}
