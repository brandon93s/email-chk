import test from 'ava'
import emailChk from '../index'

test('Non-email returns false', async t => {
  const result = await emailChk('not-an-email')
  t.false(result)
})

test('Valid email returns true', async t => {
  const result = await emailChk('noreply@github.com')
  t.true(result)
})

test('Invalid email returns false', async t => {
  const result = await emailChk('test@example.com')
  t.false(result)
})

test('Invalid domain returns false', async t => {
  const result = await emailChk('test@example.invaliddns')
  t.false(result)
})
