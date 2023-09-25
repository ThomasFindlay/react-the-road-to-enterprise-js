import propTypes from 'prop-types';
import posts from './posts.json';
import withPagination from './withPagination';

const POSTS_PER_PAGE = 5;

const DisplayBlogPosts = (props) => {
  const { page, prevPage, nextPage } = props;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = page * POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, end);

  const onNextPage = () => {
    const nextEnd = (page + 1) * POSTS_PER_PAGE;
    if (nextEnd > posts.length) return;
    nextPage();
  };

  return (
    <div>
      <h3 className='text-md md:text-lg font-semibold mb-4'>BlogPosts</h3>

      <div>
        <div className='my-4 space-y-2'>
          {currentPosts.map((post) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
        <div className='space-x-3'>
          <button onClick={prevPage}>{'<'}</button>
          <span>{page}</span>
          <button onClick={onNextPage}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

DisplayBlogPosts.propTypes = {
  page: propTypes.number.isRequired,
  setPage: propTypes.func.isRequired,
  nextPage: propTypes.func.isRequired,
  prevPage: propTypes.func.isRequired,
};

export default withPagination(DisplayBlogPosts, 1);
