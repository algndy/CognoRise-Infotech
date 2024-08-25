import { createContext, useContext, useEffect, useRef, useState } from "react";

const ProjectProvider = createContext();
function ProjectContext({ children }) {
  const [showEditTask, setShowEditTask] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [currentTask, setCurrentTask] = useState({});
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects")) || []
  );
  const ref = useRef([]);
  function handelAddNewProject() {
    if (projects.length === 0) {
      const newProjects = [
        {
          id: 1,
          name: "new project 1",
          lists: [
            {
              id: 1,
              name: "to do 1",
              tasks: [
                {
                  id: 1,
                  name: "task 1",
                  description: "this is task 1",
                  piriority: "low",
                },
              ],
            },
          ],
        },
      ];
      setProjects(newProjects);
    } else
      setProjects([
        ...projects,
        {
          id: projects[projects.length - 1].id + 1,
          name: `new project ${projects[projects.length - 1].id + 1}`,
          lists: [
            {
              id: 1,
              name: "to do",
              tasks: [
                {
                  id: 1,
                  name: "task 1",
                  description: "this is task 1",
                  piriority: "low",
                },
              ],
            },
          ],
        },
      ]);
  }

  function handleDeleteProject(id) {
    const newProjects = projects.filter((project) => +project.id !== +id);
    setProjects(newProjects);
  }
  function handleStartEditProject(id) {
    const currentProject = projects.findIndex((item) => item["id"] === id);
    const newName = prompt(
      "Enter new name of project '" + projects[currentProject].name + "'"
    );
    if (!newName) return;
    const newProjectList = projects.map((project) =>
      project.id === id ? { ...project, name: newName } : project
    );

    localStorage.setItem("projects", JSON.stringify(newProjectList));
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }

  function handleAddNewList(projectId) {
    const newProjects = projects.map((project) =>
      projectId === project.id
        ? {
            ...project,
            lists: [
              ...project.lists,
              {
                id: project.lists[project.lists.length - 1].id + 1,
                name: `to do ${project.lists[project.lists.length - 1].id + 1}`,
                tasks: [
                  {
                    id: 1,
                    name: "task 1",
                    description: "this is task 1",
                    piriority: "low",
                  },
                ],
              },
            ],
          }
        : project
    );
    setProjects(newProjects);
  }

  function handleDeleteList(projectId, listId) {
    const newProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            lists: project.lists.filter((list) => list.id !== listId),
          }
        : project
    );
    setProjects(newProjects);
  }
  function handleEditListName(projectId, listId) {
    const currentList = projects
      .filter((project) => project.id === projectId)[0]
      .lists.find((item) => item["id"] === listId);
    const newListName = prompt(`Enter new name of List '${currentList.name}'`);
    if (!newListName) return;
    const newProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            lists: project.lists.map((list) =>
              list.id === listId
                ? {
                    ...list,
                    name: newListName,
                  }
                : list
            ),
          }
        : project
    );
    setProjects(newProjects);
  }

  function handleAddNewTask(projectId, listId) {
    const newProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            lists: project.lists.map((list) =>
              list.id === listId
                ? {
                    ...list,
                    tasks: [
                      ...list.tasks,
                      {
                        id:
                          list.tasks.length > 0
                            ? list.tasks[list.tasks.length - 1].id + 1
                            : 1,
                        name: `task ${
                          list.tasks.length > 0
                            ? list.tasks[list.tasks.length - 1].id + 1
                            : 1
                        }`,
                        piriority: "low",
                        description: `this is task ${
                          list.tasks.length > 0
                            ? list.tasks[list.tasks.length - 1].id + 1
                            : 1
                        }`,
                      },
                    ],
                  }
                : list
            ),
          }
        : project
    );

    setProjects(newProjects);
  }

  function handleDeleteTask(projectId, listId, taskId) {
    const newProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            lists: project.lists.map((list) =>
              list.id === listId
                ? {
                    ...list,
                    tasks: list.tasks.filter((task) => task.id !== taskId),
                  }
                : list
            ),
          }
        : project
    );
    setProjects(newProjects);
  }

  function handleEditTask(newName, newDescription, newPiriority) {
    if (!newName) return;
    if (!newDescription) newDescription = "Description is empty";
    const { projectId, listId, taskId } = currentTask;
    const newProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            lists: project.lists.map((list) =>
              list.id === listId
                ? {
                    ...list,
                    tasks: list.tasks.map((task) =>
                      task.id === taskId
                        ? {
                            ...task,
                            name: newName,
                            description: newDescription,
                            piriority: newPiriority,
                          }
                        : task
                    ),
                  }
                : list
            ),
          }
        : project
    );

    setProjects(newProjects);
    setShowEditTask(false);
  }
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ProjectProvider.Provider
      value={{
        darkMode,
        setDarkMode,
        showEditTask,
        setShowEditTask,
        currentTask,
        setCurrentTask,
        projects,
        setProjects,
        ref,
        handelAddNewProject,
        handleDeleteProject,
        handleStartEditProject,
        handleAddNewList,
        handleDeleteList,
        handleEditListName,
        handleAddNewTask,
        handleDeleteTask,
        handleEditTask,
      }}
    >
      {children}
    </ProjectProvider.Provider>
  );
}

function useProjectContext() {
  const context = useContext(ProjectProvider);
  if (context === undefined)
    throw new Error(
      "the useProjectContext-API is used outside its ProjectProvider "
    );
  else return context;
}

export { ProjectContext, useProjectContext };
