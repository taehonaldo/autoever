import { Route, Routes } from 'react-router';
import { routes } from './routes';
import Header from './layouts/Header';
import { columnBox } from './styles/common.styled';
import styled from 'styled-components';

const App = () => {
	return (
		<AppContainer>
			<Header />
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</AppContainer>
	);
};

const AppContainer = styled.div`
	${columnBox};
	background-color: red;
`;

export default App;
