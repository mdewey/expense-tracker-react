const production = {
  API_URL: ''
}

const development = {
  API_URL: 'https://localhost:5001/api'
}

const testEnv = {
  API_URL: ''
}

const Config = {
  production,
  development,
  test: testEnv
}

export default Config[process.env.NODE_ENV || 'development']
