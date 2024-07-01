import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const pages = ['', 'Pricing', 'Blog']

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const navigate = useNavigate()

	const handleLibraryClick = () => {
		navigate('/')
		setAnchorElNav(null)
	}

	const handleEditClick = () => {
		navigate('/edit')
		setAnchorElNav(null)
	}

	const handleAddClick = () => {
		navigate('/add')
		setAnchorElNav(null)
	}

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}>
						<Button
							key={'Моя библиотека'}
							onClick={handleLibraryClick}
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
							}}>
							Моя библиотека
						</Button>
						<Button
							key={'Редактировать'}
							onClick={handleEditClick}
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
							}}>
							Редактировать
						</Button>
						<Button
							key={'Добавить книгу'}
							onClick={handleAddClick}
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
							}}>
							Добавить книгу
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
