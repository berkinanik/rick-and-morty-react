import PropTypes from 'prop-types';
import { Stack, Pagination, Container } from '@material-ui/core';

function ControlledPagination(props) {
  const { page, pageChangeHandler, pageCount } = props;

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Stack spacing={2}>
        <Pagination count={pageCount} page={page} onChange={pageChangeHandler} />
      </Stack>
    </Container>
  );
}

ControlledPagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
};

export default ControlledPagination;
