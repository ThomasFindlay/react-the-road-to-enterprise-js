import logo from '../logo.png'

const Logo = () => {
  return (
    <a
      className="block mx-auto"
      href="https://theroadtoenterprise.com"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} className="w-48" alt="logo" />
    </a>
  )
}

export default Logo
