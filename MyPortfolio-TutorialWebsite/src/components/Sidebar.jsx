import React from "react";
import { NavLink } from "react-router-dom";
import reactTopics from "../pages/react-tutorials/datatopics/ReactTopics";

function Sidebar() {
  return (
    <div className="sidebar bg-light">
      <ul className="list-unstyled">
        {reactTopics.map((section, sectionIndex) => (
          <li key={sectionIndex} className="mb-4">
            <h6 className="fw-semibold mt-3 text-primary ps-4">{section.title}</h6>
            <ul className="list-unstyled">
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="">
                  <NavLink
                    to={topic.path === "" ? "." : topic.path} 
                    end
                    className={({ isActive }) =>
                      `text-decoration-none d-block py-1 ${
                        isActive ? "active-link" : "text-dark"
                      }`
                    }
                  >
                    {topic.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
