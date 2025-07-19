import { FormValidationProvider } from '@/hooks/use-form-validator/form-validation-context';
import FormAddOrganization from '@/modules/auth/components/form-add-organization';

export default async function Index() {
  return (
    <>
      <FormValidationProvider>
        <FormAddOrganization />
      </FormValidationProvider>
    </>
  );
}
