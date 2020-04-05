import * as className from 'classnames/bind';
import * as React from "react";
import * as styles from './index.scss';
import { ICommentEntity } from '@interfaces/entities/comment';

const cx = className.bind(styles);

interface IProps {
  comment: ICommentEntity;
}

const CommentItem: React.FC<IProps> = (props) => {
  const { comment: { id, author, content, createAt } } = props;
  const createDate = new Date(createAt);

  return (
    <li className={cx("comment-item")}>
      <p>&rsaquo;</p>
      <p>{author}</p>
      <p>{content}</p>
      <p>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</p>
    </li>
  );
};

export default CommentItem;