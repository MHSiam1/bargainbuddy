from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User

class CoreViewsTest(TestCase):
    def setUp(self):
        # Create a test user
        self.user_data = {
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com',
        }
        self.user = User.objects.create_user(**self.user_data)

    def test_signup_view_get(self):
        # Test GET request to the signup view
        response = self.client.get(reverse('core:signup'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/signup.html')

    def test_signup_view_post_valid_data(self):
        # Test POST request to the signup view with valid data
        new_user_data = {
            'username': 'newuser',
            'password1': 'newpassword',
            'password2': 'newpassword',
            'email': 'newuser@example.com',
        }
        response = self.client.post(reverse('core:signup'), new_user_data)

        # Check if the user is redirected to the login page
        self.assertRedirects(response, reverse('login'))

        # Check if the new user is created
        new_user = User.objects.get(username=new_user_data['username'])
        self.assertIsNotNone(new_user)

    def test_signup_view_post_invalid_data(self):
        # Test POST request to the signup view with invalid data
        invalid_user_data = {
            'username': '',  # Invalid because username is required
            'password1': 'password',
            'password2': 'password',
            'email': 'invalidemail',  # Invalid email format
        }
        response = self.client.post(reverse('core:signup'), invalid_user_data)

        # Check if the user is not created
        with self.assertRaises(User.DoesNotExist):
            User.objects.get(username=invalid_user_data['username'])

        # Check if the response contains form errors
        self.assertContains(response, 'This field is required')
        self.assertContains(response, 'Enter a valid email address')

    def test_signup_view_post_existing_user(self):
        # Test POST request to the signup view with an existing username
        existing_user_data = {
            'username': self.user_data['username'],
            'password1': 'newpassword',
            'password2': 'newpassword',
            'email': 'newuser@example.com',
        }
        response = self.client.post(reverse('core:signup'), existing_user_data)

        # Check if the user is not created
        self.assertEqual(User.objects.filter(username=self.user_data['username']).count(), 1)

        # Check if the response contains form errors
        self.assertContains(response, 'A user with that username already exists.')

# Note: Adjust the view names ('core:signup') based on your actual app and URL configurations.
