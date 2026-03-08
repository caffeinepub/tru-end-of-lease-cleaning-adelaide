import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    suburb : Text;
    serviceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type QuoteRequest = {
    name : Text;
    email : Text;
    phone : Text;
    suburb : Text;
    bedrooms : Nat;
    bathrooms : Nat;
    carpetCleaning : Bool;
    extras : [Text];
    timestamp : Time.Time;
  };

  let contactSubmissions = List.empty<ContactSubmission>();
  let quoteRequests = List.empty<QuoteRequest>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    suburb : Text,
    serviceType : Text,
    message : Text,
  ) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      suburb;
      serviceType;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public shared ({ caller }) func submitQuoteRequest(
    name : Text,
    email : Text,
    phone : Text,
    suburb : Text,
    bedrooms : Nat,
    bathrooms : Nat,
    carpetCleaning : Bool,
    extras : [Text],
  ) : async () {
    let request : QuoteRequest = {
      name;
      email;
      phone;
      suburb;
      bedrooms;
      bathrooms;
      carpetCleaning;
      extras;
      timestamp = Time.now();
    };
    quoteRequests.add(request);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequests.toArray();
  };
};
