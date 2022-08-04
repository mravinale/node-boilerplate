import SinonChai from 'sinon-chai';
import { User } from "../app/user";
import { spy } from "sinon"
import chai, { expect } from "chai";

// enhance chai with sinon capabilities
chai.use(SinonChai);

describe("User Tests", () => {

    it("should return the users name passed when initialized", async () => {
        // Act
        const user =  new User("John");

        // Assert
        expect(user.name).equals("John");
    });

    it("should validate that display name functionality has been trigered", async () => {
        // Arrange
        spy(console, 'log');
        let user =  new User("John");

        // Act
        user.displayName();

        // Assert
        expect(console.log).to.have.been.called;
    });
});
