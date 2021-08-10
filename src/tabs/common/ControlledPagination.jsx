import PropTypes from 'prop-types';
import { Stack, Pagination } from '@material-ui/core';

function ControlledPagination(props) {
  const { page, pageChangeHandler, pageCount } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={pageChangeHandler} />
    </Stack>
  );
}

ControlledPagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
};

export default ControlledPagination;
