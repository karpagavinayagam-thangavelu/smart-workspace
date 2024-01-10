import unittest
import app

class LoginTestcase(unittest.TestCase):
    def setUp(self) -> None:
        self.ctx = app.app_context()
        self.ctx.push()
        self.client = app.test_client()
        return super().setUp()
    
    def tearDown(self) -> None:
        self.ctx.pop()
        return super().tearDown()
    
    def test(self) -> str:
        return ""