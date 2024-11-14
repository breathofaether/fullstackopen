const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Course name: {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      Part name: {props.part}, No. of exercises: {props.exercises}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part_1} exercises={props.exercises_1} />
      <Part part={props.part_2} exercises={props.exercises_2} />
      <Part part={props.part_3} exercises={props.exercises_3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Total number of exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  

  return (
    <div>
      <Header course={course.name} />
      <Content part_1={course.parts[0].name} exercises_1={course.parts[0].exercises}
        part_2={course.parts[1].name} exercises_2={course.parts[1].exercises}
        part_3={course.parts[2].name} exercises_3={course.parts[2].exercises} />
      <Total total={total} />
    </div>
  )
}

export default App