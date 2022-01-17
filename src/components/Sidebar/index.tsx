import { connect } from "react-redux";

type lesson = {
  id: string,
  title: string
}

type module = {
  id: string,
  title: string,
  lesson: lesson
}

function toggleLesson(module: any, lesson: any) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}

const Sidebar = ({ modules, dispatch }: any) => (
  <aside>
    {modules.modules.map((module: any) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson: any) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                Seleccionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);  

export default connect((state) => ({ modules: state }))(Sidebar);
