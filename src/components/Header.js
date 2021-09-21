import PropTypes from 'prop-types'

//passo come parametro della funzione una props 'title'
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

//assegno i valori alle props
Header.defaultProps = {
    title: 'Task Traker',
}

//defnisco le caratteristiche delle props... ricorda di importare PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
