import PropTypes from 'prop-types'
import Button from './Button'

//passo come parametro della funzione una props 'title'
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

//assegno i valori alle props
Header.defaultProps = {
    title: 'Task Tracker',
}

//defnisco le caratteristiche delle props... ricorda di importare PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


//esempio di CSS in JS... aggingere nell'elemtno es.<h1></h1> lo stile inline style={headingStyle}
/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
} */

export default Header
