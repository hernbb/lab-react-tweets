//const { firstName="John", lastName="Doe", courses = 0, cohort} = props
const User = ({userData})=>{
  return  (<span className="user">
            <span className="name">{userData.name}</span>
            <span className="handle">{userData.handle}</span>
          </span>)
}
export default User