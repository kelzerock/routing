const baseUrl = 'http://localhost:3000';
console.log('hello')

const path = {
  Employee: '/Employee',
  comments: '/comments',
}
const generateQueryString = (quaryParams) => 
  quaryParams.length ? `?${quaryParams.map(x=>`${x.key}=${x.value}`).join('&')}` : '';


const getEmployees = async (quaryParams = []) => {
  const response = await fetch(`${baseUrl}${path.Employee}${generateQueryString(quaryParams)}`)
  const count = Number(response.headers.get('X-Total-Count'))
  const item = await response.json()
  return {item, count}
}
const getEmployee = async (id) => {
  const response = await fetch(`${baseUrl}${path.Employee}/${id}`)
  const employees = await response.json()
  return employees
}
const createEmployee = async (obj) => {
  const response = await fetch(`${baseUrl}${path.Employee}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
  const employees = await response.json()
  return employees
}
const updateEmployee = async (id, obj) => {
  const response = await fetch(`${baseUrl}${path.Employee}/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
  const employees = await response.json()
  return employees
}

const updateEmployeePatch = async (id, obj) => {
  const response = await fetch(`${baseUrl}${path.Employee}/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  })
  const employees = await response.json()
  return employees
}

const deleteEmployee = async (id) => {
  const response = await fetch(`${baseUrl}${path.Employee}/${id}`,{
    method: 'DELETE',
  })
  const employees = await response.json()
  return employees
}
// sorting
// getEmployees([{key: 'role', value: 'developer'},{key: 'active', value: 'true'}])

//return page
// const main=async()=> {
//   const employeess = await getEmployee([{key: '_page', value: '1'},{key: '_limit', value : '2'}])
//   console.log(employees)
// }

// return id
// const main=async()=> {
//   const employees = await getEmployee(2)
//   console.log(employees)
// }

// create new employee
// const main=async()=> {
//   const employees = await createEmployee({
//     name: 'kiril',
//     role: 'HR',
//     salary: 1400,
//     active: false
//   })
//   console.log(employees)
// }
// main()

//Update employee
// const main=async()=> {
//   const employees = await updateEmployee(4,{
//     name: 'maria',
//     role: 'director',
//     salary: 5400,
//     active: false,
//   })
//   console.log(employees)
// }

//Update - patch
// const main=async()=> {
//   const employees = await updateEmployeePatch(4,{
//     role: 'gamer',

//   })
//   console.log(employees)
// }


const main=async()=> {
  const employees = await deleteEmployee(2)
  console.log(employees)
}



main()


 //отражаем по страницам с лим. по нему

// GET /posts?title=json-server&author=typicode
// GET /posts?id=1&id=2
// GET /comments?author.name=typicode