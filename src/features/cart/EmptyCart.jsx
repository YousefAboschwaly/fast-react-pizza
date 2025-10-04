import ButtonLink from '../../ui/ButtonLink';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <p className='font-semibold mt-7'> Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
