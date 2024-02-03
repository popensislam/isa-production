import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormLoading, getAddCommentFormText } from 'features/AddCommentForm/model/selectors/AddCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { useCallback } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


const reducers: ReducerList = { addCommentForm: addCommentFormReducer };

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm = ({ onSendComment }: AddCommentFormProps) => {

  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const loading = useSelector(getAddCommentFormLoading);

  const { t } = useTranslation();

  const onTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [ dispatch ]);

  const onSendHandler = useCallback(() => {
    onTextChange('');
    onSendComment(text || '');
  }, [ onTextChange, onSendComment, text ]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cls.commentForm}>
        <Input className={cls.input} value={text} onChange={onTextChange} placeholder={t('write_comment')}/>

        <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>{t('send')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
