import './ModalBgLayout.scss';

export const ModalBgLayout = ( {children}:any ) => {
  return (
    <>
        <div className="bg-modal">
            { children }
        </div>
    </>
  )
}
