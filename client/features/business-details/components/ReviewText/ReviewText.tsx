import { useState } from 'react';
import { classNames } from 'utils/tailwind';
import { truncateText } from 'utils/text';

export default function ReviewText({ className = '' }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const review =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quisquam deleniti deserunt laboriosam voluptas nobis delectus officiis natus sunt, incidunt ab ipsa mollitia sit culpa sed magni suscipit labore iure. Veritatis, illo numquam doloremque nam laborum praesentium enim distinctio rem! Soluta, quod iste inventore reprehenderit ullam sit nulla assumenda? Quisquam dicta dignissimos cum fugiat quod dolore quae inventore eveniet atque. Sint animi sed qui dolores magni aut mollitia cum expedita, deserunt ullam tempora sapiente doloremque vero ab veniam quis blanditiis sit, voluptates cupiditate illum ex voluptas aliquam! Minima nesciunt, error praesentium sed quidem atque dolorem totam tempora distinctio quaerat eaque modi debitis officia, neque voluptates. Fugit sequi, accusamus itaque vero voluptas autem magni sit ut dolore reprehenderit ea eveniet voluptatem reiciendis recusandae magnam voluptate natus illum consectetur facere sapiente quaerat minus. Commodi officia cumque temporibus sunt quaerat accusamus animi nostrum doloremque, dolore illum quibusdam mollitia dolores corporis officiis ut placeat vero perspiciatis aperiam deleniti fugit velit nam cupiditate. Eveniet voluptates minus similique incidunt, placeat ab natus quae eum provident architecto cum voluptas itaque. Odio, pariatur sit illo aut voluptatibus quae excepturi? Laborum adipisci distinctio nesciunt perferendis earum nihil explicabo et voluptatem exercitationem similique odit, numquam recusandae sed aliquid dolore architecto facilis dolor fugit! Pariatur labore atque magni delectus iste molestias? Architecto, at cum aliquam perferendis nobis accusantium est totam commodi nam pariatur a aut iste porro laudantium temporibus saepe. Incidunt, reprehenderit architecto. Ratione fugit suscipit aperiam nemo, officiis exercitationem quaerat inventore tempore nesciunt fugiat totam quasi labore aliquid sint maiores. Soluta, odio ducimus. Eaque atque ab dolores consequuntur corporis, fuga quasi numquam nesciunt assumenda repudiandae illo facilis omnis? Dolor quis dolore omnis vero, eligendi enim harum alias voluptatibus consectetur possimus illum, incidunt voluptates quasi beatae? Alias delectus in labore atque officia unde facilis molestiae, sit blanditiis totam eius. Eos, corrupti!';

  return (
    <p
      className={classNames(
        'cursor-pointer leading-7 hover:text-gray-800',
        className
      )}
      onClick={handleClick}
    >
      {!isExpanded && truncateText(review, 100)}
      {isExpanded && review}

      <span
        onClick={handleClick}
        className="ml-3 inline-block underline hover:text-gray-700"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </span>
    </p>
  );
}
